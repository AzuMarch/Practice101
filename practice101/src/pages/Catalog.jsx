import React, { useState, useEffect } from 'react';
import CatalogLayout from 'components/catalog/CatalogLayout';
import FilterSidebar from 'components/catalog/FilterSidebar';
import ItemGrid from 'components/catalog/itemGrid';
import ResultBar from 'components/catalog/ResultBar';
import InputGroup from 'components/InputGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import { connect } from 'react-redux';
import { selectItemsInPriceRange } from 'store/selectors';
import uniqid from 'uniqid';


const sortFunctions = {
    'a-z': (a, b) => a.title.localeCompare(b.title),
    'z-a': (a, b) => a.title.localeCompare(b.title) * (-1),
    'price-asc': (a, b) => b.price - a.price,
    'price-desc': (a, b) => a.price - b.price,
    'rating': (a, b) => a.rating - b.rating
}

const initFilters = [
    {
        name: 'Types',
        filterFunction: options => item => {
            const type = item.type;
            for (let i = 0; i < options.length; i++) {
                const { name, checked } = options[i];
                if (!checked && type === name) return false;
            }
            return true;
        },
        options: [
            {
                name: 'Formal',
                checked: true
            },
            {
                name: 'Sport',
                checked: true
            },
            {
                name: 'Casual',
                checked: true
            }
        ]
    }
]

const Catalog = ({initItems}) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(50);
    const [filteredItems, setFilteredItems] = useState(initItems);
    const [sortOrder, setSortOrder] = useState('a-z');
    const [filters, setFilters] = useState(initFilters);


    const changeFilterOptions = (filterName, optionName) => {
        setFilters(filters.map(filter => ({
            ...filter,
            options: filter.options.map(option => ({
                ...option,
                checked: filterName === filter.name && optionName === option.name ? !option.checked : option.checked
            }))
        })))
    }

    // Filtravimas
    useEffect(() => {
        // Filtravimas pagal kainos rėžius
        let items = initItems.filter(({ price }) => price >= minValue && price <= maxValue);
        // Kiti filtravimai iš filters masyvo
        filters.forEach(({filterFunction, options}) => items = items.filter(filterFunction(options)));
        setFilteredItems(items);
    }, [minValue, maxValue, filters])

    // Rikiavimas
    useEffect(() => {
        setFilteredItems(filteredItems.sort(sortFunctions[sortOrder]));
    }, [sortOrder])

    const filtersView = filters.map(filter => {
        const options = filter.options.map(option =>
            <CheckboxGroup title={option.name} onChange={(title) => changeFilterOptions(filter.name, title)} checked={option.checked} key={uniqid()}/>
        )
        return (
            <>
                <h2>{filter.name}</h2>
                {options}
            </>
        )
    })


    return (
        <CatalogLayout>
            <ResultBar count={filteredItems.length} sortOrder={sortOrder} onSortOrderChange={setSortOrder} />
            <FilterSidebar>
                <InputGroup title="Min price:" type="text" initValue={minValue} onChange={setMinValue} />
                <InputGroup title="Max price:" type="text" initValue={maxValue} onChange={setMaxValue} />
                {filtersView}
            </FilterSidebar>
            <ItemGrid items={filteredItems} />
        </CatalogLayout>
    )
}

const mapStateToProps = (state) => ({
    initItems: state.catalog.items,
    filteredItems: (min, max) => selectItemsInPriceRange(state, min, max)
});

export default connect(mapStateToProps)(Catalog);
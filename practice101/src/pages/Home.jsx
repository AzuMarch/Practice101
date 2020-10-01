import React from 'react';
import TitleImage from 'components/home/TitleImage';
import HomeLayout from 'components/home/HomeLayout';
import AboutDesc from 'components/home/AboutDesc';
import StoreLink from 'components/home/StoreLink';

const Home = () => {
    return (
        <HomeLayout>
            <TitleImage title="The best in class"/>
            <AboutDesc description="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. "/>
            <StoreLink />
        </HomeLayout>
    )
}

export default Home;
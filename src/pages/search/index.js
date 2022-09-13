import {
  Wrapper,
  ImgWrapper,
  ContentWrapper,
  Titles,
  UserWrapper,
  UserAbout,
  UserName,
  UserDesc,
  UserPhoto,
  PriceWrapper,
  Prices,
  LeftPrice,
  RightPrice,
  ProgressWrapper,
  GridBody,
  Loading
} from "./SearchCard.styled";
import { Carddata } from "./CardData"
import {
  Grid,
  Progress,

} from "@mantine/core";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Mainly, Title,Name, Personal, Photo, Searchbar, Searchdiv, Tag } from "./Search.Styled";
import {HiBadgeCheck, HiOutlineFilter} from "react-icons/hi"
import {FiSearch} from "react-icons/fi"
import { useState, useEffect } from "react";
import verify from '../../style/icons/verified.png'




function Search() {

  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchs, setSearchs] = useState("");
  const [filteredCountriesa, setFilteredCountriesa] = useState([]);

  useEffect(() => {
    setFilteredCountries(
      Carddata.data.filter((country) =>
        country.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, Carddata.data]);
  useEffect(() => {
    setFilteredCountriesa(
      Carddata.person.filter((country) =>
        country.name.toLowerCase().includes(searchs.toLowerCase())
      )
    );
  }, [searchs, Carddata.person]);


  return (
  <Mainly>
    <Title>Search results</Title>
    <Searchdiv>
    <Searchbar
        type="text"
        placeholder="Bruno"
        onChange={(e) => setSearch(e.target.value) || setSearchs(e.target.value)}
      />
      <FiSearch className="lupa"/>
      <HiOutlineFilter className="filter"/>
      </Searchdiv>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 tabs-choose"
      
    >
      <Tab eventKey="home" className="tabone tabsfirst" title={(<p>Wishes <span style={{marginLeft:"8px",color:"#160046", opacity:"0.56"}}>8</span></p>) }>
        <GridBody>
        <Grid className="griddiv">
          {filteredCountries.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (
            // <Grid.Col className="gridcol" xs={6} md={3} lg={3}>
              <Wrapper className="cart-item" onMouseOver={(e) => {
                e.currentTarget.setAttribute('style', 'border: 1px solid #3800B0;');
                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: visible');
                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: visible');

              }} onMouseOut={(e) => {
                e.currentTarget.setAttribute('style', 'border: 1px solid #EBE5F7;')
                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: hidden');
                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: hidden');
              }}>
                <div className="image-container">
                  <button className='congralute-button'>Congralute</button>
                  <div className="image-background"></div>
                  <ImgWrapper src={url}></ImgWrapper>
                </div>
                <ContentWrapper>
                  <Titles>{title}</Titles>
                  <UserWrapper>
                    <UserAbout>
                      <UserName>{username}</UserName>
                      <UserDesc>{userdesc}</UserDesc>
                    </UserAbout>
                    <UserPhoto src={userphoto}></UserPhoto>
                  </UserWrapper>

                  <PriceWrapper>
                    <ProgressWrapper>
                      <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                    </ProgressWrapper>
                    <Prices>
                      <LeftPrice>{leftprice}</LeftPrice>
                      <RightPrice>{rightprice}</RightPrice>
                    </Prices>
                  </PriceWrapper>
                </ContentWrapper>
              </Wrapper>
            // </Grid.Col>
          ))}
    </Grid>
          <Loading>Loading</Loading>
        </GridBody>
      </Tab>
      <Tab eventKey="profile" title={(<p>Profile<span style={{marginLeft:"8px" ,color:"#160046", opacity:"0.56"}}>16</span></p>) } className="tabtwo ">
    <GridBody>
      <Grid className="griddiv">
        {
          filteredCountriesa.map((index) =>(
            <Personal>
              <Photo src={index.img}/>
              <Name>{index.name} <HiBadgeCheck className="check"/></Name>
              <Tag>{index.tag}</Tag>
            </Personal>
          ))
        }
      </Grid>
      <Loading>Loading</Loading>
    </GridBody>
        </Tab>
    </Tabs>
  </Mainly>
  )
}
export default Search;
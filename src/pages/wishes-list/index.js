import React from 'react'
import { Grid, Container, Input, Image, Progress } from "@mantine/core";
import { BlogCard, BlogMainSection, ButtonSection, Loading, PaginationSection } from './WishesList.styled'
import { CustomInput } from '../../shared/ui/İnput';
import { Wrapper, ImgWrapper, ContentWrapper, Title, UserWrapper, UserAbout, UserDesc,UserName, UserPhoto, PriceWrapper, ProgressWrapper, Prices, LeftPrice, RightPrice } from '../../shared/components/home/homeCard/HomeCard.styled'
import { AiOutlineSearch, AiTwotoneLike} from 'react-icons/ai';
import { BiSearch} from 'react-icons/bi';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Carddata } from './Cards';
import FilterColumns from '../wish-pages/filter/filter';
import { FiFilter } from 'react-icons/fi';

class WishList extends React.Component {
    render() {
        return (
            <BlogMainSection fluid>
                <div className='instruction'>
                    <p>Main {">"} Wishes</p>
                    <h2>Wishes</h2>
                </div>
                <ButtonSection>
                    <div className='btn-section'>
                        <Button className='all-btn'>All</Button>
                        <Button className='other-btn'>Travel</Button>
                        <Button className='other-btn'>Sport</Button>
                        <Button className='other-btn'>Gadgets</Button>
                        <Button className='other-btn'>Foto {'&'} Video</Button>
                        <Button className='other-btn'>Clothes</Button>
                    </div>
                    <div className='input-section' style={{ height: "50px" }}>
                        <CustomInput height={200} className='inp-sect' placeholder='Search by wishes' />
                        <a href='#' className='filter-icon'><FiFilter /></a>
                        <a href='#' className='search-icon'><BiSearch ></BiSearch></a>
                    </div>
                    
                </ButtonSection>
    
                <BlogCard fluid>
                    <Grid>
                    {Carddata.data.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (
                <Grid.Col xs={12} sm={6} md={3} lg={3}>
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
                      <Title>{title}</Title>
    
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
                </Grid.Col>
              ))}
                    </Grid>
    
                </BlogCard>
                <Loading>
                    Loading
                </Loading>
            </BlogMainSection>
        )
    }
}

export default WishList
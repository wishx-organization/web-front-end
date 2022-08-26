import react from 'react'
import { Grid, Container, Input, Image } from "@mantine/core";
import { BlogCard, BlogMainSection, ButtonSection, CardTopSection, PaginationSection } from './BlogMain.Styled'
import mountn from '../../../style/icons/moutn.jpg'
import { CustomInput } from '../../../shared/ui/İnput';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { BlogDataCard } from './BlogCardData';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const nextpagination = 'next'
const MainBlog = () => {
    return (
        <BlogMainSection fluid>
            <div className='instruction'>
                <p>Main {">"} Blog</p>
                <h2>Blog</h2>
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
                    <CustomInput className='inp-sect' placeholder='Search by all blog articles' />
                </div>
            </ButtonSection>
            <CardTopSection fluid>
                <Grid>
                    <Grid.Col p={0} span={6}>
                        <Image className='img-section' src={mountn} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div className='read-section'>
                            <p className='top-txt'>May 20</p>
                            <h2>Everest Base Camp trek, Day 5 - Dingboche to Leboche</h2>
                            <p className='txt'>
                                This was my favorite day of hiking! When we left after breakfast, and after I had taken my first diamox pill
                                {"(I only did half in the morning and half at night)"}, we had about a 20 minute climb behind the village.
                            </p>
                            <a href='#'>Read article</a>
                        </div>
                    </Grid.Col>
                </Grid>
            </CardTopSection>

            <BlogCard fluid>
                <Grid>
                    {BlogDataCard.data.map(({ foto, date, category, title, text }) => (
                        <Grid.Col xs={12} sm={6} md={4} lg={4}>
                            <Card sx={{ maxWidth: 600 }} style={{ boxShadow: "none" }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={foto}
                                        height="230px"
                                        style={{ borderRadius: "20px" }}
                                    />
                                    <CardContent style={{padding: "0", paddingTop:"20px"}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <p className='date-category'>{date} - {category}</p>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <h1 className='title-card'>{title}</h1>
                                            <p className='text-card'>{text}</p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="p-0">
                                    <a href="#" className="read-article">Read article</a>
                                </CardActions>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>

            </BlogCard>
            <PaginationSection>
                <Stack spacing={2}>
                    <Pagination
                        count={10}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                {...item}
                            />
                        )}
                    />
                </Stack>
            </PaginationSection>
        </BlogMainSection>
    )
}

export default MainBlog
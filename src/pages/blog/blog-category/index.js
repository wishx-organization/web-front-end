import react from 'react'
import { Grid, Container, Input, Image } from "@mantine/core";
import { BlogCard, BlogMainSection, ButtonSection, PaginationSection } from './BlogC.Styled'
import { CustomInput } from '../../../shared/ui/İnput';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { CardsCategory } from './Cards';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const BlogCategory = () => {
    return (
        <BlogMainSection fluid>
            <div className='instruction'>
                <p>Main {">"} Blog {">"} Travel</p>
                <h2>Travel articles</h2>
            </div>
            <ButtonSection>
                <div className='btn-section'>
                    <Button className='other-btn-th'>All</Button>
                    <Button className='all-btn'>Travel</Button>
                    <Button className='other-btn'>Sport</Button>
                    <Button className='other-btn'>Gadgets</Button>
                    <Button className='other-btn'>Foto {'&'} Video</Button>
                    <Button className='other-btn'>Clothes</Button>
                </div>
                <div className='input-section' style={{ height: "50px" }}>
                    <CustomInput className='inp-sect' placeholder='Search by all blog articles' />
                </div>
            </ButtonSection>

            <BlogCard fluid>
                <Grid>
                    {CardsCategory.data.map(({ foto, date, category, title, text }) => (
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

export default BlogCategory
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Link } from '@material-ui/core'
import NextLink from 'next/link';

import Layout from '../components/Layout'
import data from '../utils/data'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name + product.description}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <Link>
                    <CardActionArea>
                      <CardMedia component='img' image={product.image} title={product.name} />
                      <CardContent>
                        <Typography>
                          {product.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </NextLink>
                <CardActions>
                  <Typography>
                    ${product.price}
                  </Typography>
                  <Button>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}

        </Grid>
      </div>
    </Layout>
  )
}

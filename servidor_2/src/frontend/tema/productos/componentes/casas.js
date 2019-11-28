import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
import { pink } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Header from './../../../header/encabezado.js';
import Footer from './../../../footer/pie.js';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: pink[500],
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),},
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (

    <>
    <Header/>

    <Grid
      container
      justify='center'
    >
      <Grid item xs={11} sm={11} md={9}>
        <Grid
          container
          spacing={8}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                title="Categoria"
                subheader="Casas"
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Precio:$76,000.00
                </Typography>
              </CardContent>  */}
            </Card>
          </Grid>
        
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                title="Precio"
                subheader="$76,000.00"
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Precio:$76,000.00
                </Typography>
              </CardContent>  */}
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                title="Tamaño del lote"
                subheader="188.59"
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Precio:$76,000.00
                </Typography>
              </CardContent>  */}
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                title="Precio/M² de construcción"
                subheader="$622.95"
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Precio:$76,000.00
                </Typography>
              </CardContent>  */}
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                title="Dirección exacta"
                subheader="Salida sur de Jinotepe, km 50 carretera panamericana 100 mts al este 250 mts al norte"
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Precio:$76,000.00
                </Typography>
              </CardContent>  */}
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                title="Precio/M² de terreno"
                subheader="$402.99"
              />
              {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Precio:$76,000.00
                </Typography>
              </CardContent>  */}
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
    <Footer/>
    </>
  );
}
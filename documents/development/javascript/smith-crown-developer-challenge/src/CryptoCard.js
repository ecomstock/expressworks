import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

const CryptoCard = props => {
  
  return (
    <div>
      <Card classes={{"root": "card"}}>
        <CardHeader 
          avatar={
            <Avatar src={props.img} />
          }
          classes={{"title": "cryptocard-header-title", "root": "cryptocard-header"}} 
          title={props.name} 
          subheader={props.description}
        />
        <CardContent>
          <Typography component="p">
            Language: {props.language}
          </Typography>
          <Typography component="p">
            Open Issues: {props.openIssues}    
          </Typography>
          <Typography component="p">
            Forks: {props.forks}    
          </Typography>
          <Typography component="p">
            Home page: <a href={props.homepage}>{props.homepage}</a>   
          </Typography>
        </CardContent>
      </Card>
    </div>
  )

}

// CryptoCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   imageLink: PropTypes.string.isRequired,
// }

export default CryptoCard;


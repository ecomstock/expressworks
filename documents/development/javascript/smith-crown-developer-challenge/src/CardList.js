import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import CryptoCard from "./CryptoCard"

const CardList = props => {

  
    return(
      <Grid container spacing={24} justify="center">
        <Grid item s>
          <CryptoCard 
            name={props.apiData[0].name}
            description={props.apiData[0].description}
            img={props.apiData[0].owner.avatar_url}
            language={props.apiData[0].language}
            openIssues={props.apiData[0].open_issues}
            forks={props.apiData[0].forks}
            homepage={props.apiData[0].homepage}
          />
        </Grid>
        <Grid item s>
          <CryptoCard
            name={props.apiData[1].name}
            description={props.apiData[1].description}
            img={props.apiData[1].owner.avatar_url}
            language={props.apiData[1].language}
            openIssues={props.apiData[1].open_issues}
            forks={props.apiData[1].forks}
            homepage={props.apiData[1].homepage}
          />
        </Grid>
        <Grid item s>
          <CryptoCard 
            name={props.apiData[2].name}
            description={props.apiData[2].description}
            img={props.apiData[2].owner.avatar_url}
            language={props.apiData[2].language}
            openIssues={props.apiData[2].open_issues}
            forks={props.apiData[2].forks}
            homepage={props.apiData[2].homepage}
          />
        </Grid>
        <Grid item s>
          <CryptoCard 
            name={props.apiData[3].name}
            description={props.apiData[3].description}
            img={props.apiData[3].owner.avatar_url}
            language={props.apiData[3].language}
            openIssues={props.apiData[3].open_issues}
            forks={props.apiData[3].forks}
            homepage={props.apiData[3].homepage}
          />
        </Grid>
        <Grid item s>
          <CryptoCard
            name={props.apiData[4].name}
            description={props.apiData[4].description}
            img={props.apiData[4].owner.avatar_url}
            language={props.apiData[4].language}
            openIssues={props.apiData[4].open_issues}
            forks={props.apiData[4].forks}
            homepage={props.apiData[4].homepage}
          />
        </Grid>
        <Grid item s>
          <CryptoCard 
            name={props.apiData[5].name}
            description={props.apiData[5].description}
            img={props.apiData[5].owner.avatar_url}
            language={props.apiData[5].language}
            openIssues={props.apiData[5].open_issues}
            forks={props.apiData[5].forks}
            homepage={props.apiData[5].homepage}
          />
        </Grid>
      </Grid>
    )
  
}

CardList.propTypes = {
  
}

export default CardList;
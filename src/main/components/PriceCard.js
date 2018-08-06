import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: 100
    },
    title: {
        color: 'black',
    }
}
class PriceCard extends Component {
    render() {
        return (
            <Card className={styles.card} raised="true">
                <CardHeader className={styles.title} title="Bitcoin" subheader="CAD">
                </CardHeader>
                <CardContent>
                    <Typography className={styles.title} color="textPrimary" component="h2" align="center">
                        9,000
                    </Typography>
                </CardContent>
            </Card>
        )
    };
};


export default PriceCard;

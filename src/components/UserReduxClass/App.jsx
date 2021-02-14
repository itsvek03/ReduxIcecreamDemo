import React, { Component } from 'react'
import { Card, CardContent, CardHeader, ListItemAvatar } from '@material-ui/core'
import { List, ListItem, ListItemText, Typography, Avatar } from '@material-ui/core'
import { userInfoAction } from '../../action/userAction'
import { connect } from 'react-redux'
import img1 from '../../img/profile.jpg'


class App extends Component {
    componentDidMount() {
        this.props.userInfoAction()
    }
    render() {
        var { loading, error, users } = this.props.userReducer

        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <Card className="card shadow-lg rounded">
                            <CardHeader
                                title="User Information"
                                subheader="Portfolio"
                                className="h5 text-center text-muted"
                            />
                        </Card>
                        {(loading) && (<Typography variant="h3" color="secondary" className="text-center">LOADING....</Typography>)}
                        {(error) && (<Typography variant="h3" color="secondary" className="text-center">SOMETHING WENT WRONG</Typography>)}
                        <List className="list-group-flush bg-light">
                            {
                                !users ?
                                    <Typography variant="h3" color="secondary" className="text-center">NO DATA</Typography>
                                    : users.map((item) => {
                                        return (
                                            <ListItem key={item.id}>

                                                <ListItemAvatar>
                                                    <Avatar alt="Remy Sharp" src={img1} />
                                                </ListItemAvatar>
                                                <CardContent>
                                                    <ListItemText variant="h3" color="initial">
                                                        <span className="lead">{item.username}</span><br />
                                                        <span className="lead text-muted">{item.address.city}</span>
                                                        <h5 className="lead">{item.address.geo.lat}</h5>
                                                    </ListItemText>
                                                </CardContent>

                                            </ListItem>
                                        )
                                    })
                            }
                        </List>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}

export default connect(mapStateToProps, { userInfoAction })(App)


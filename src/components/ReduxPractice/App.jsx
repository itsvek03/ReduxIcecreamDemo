import React, { useState } from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import shop from '../../img/shopkeeper.jpg'
import customer from '../../img/customer.jpg'
import CakeRoundedIcon from '@material-ui/icons/CakeRounded'
import { useDispatch, useSelector } from 'react-redux'
import { buyCakeCation } from '../../action/CakeAction'


export default function App() {
    const [order, setorder] = useState(0)
    const dispatch = useDispatch()
    const cakeorder = useSelector(state => state.BuyCakeReducer)
    console.log(cakeorder.cakes)

    const handleSubmit = () => {
        if (cakeorder.cakes) {
            dispatch(buyCakeCation())
        }
        setorder(prevstate => prevstate + 1)
    }


    return (
        <>
            <div className="card container mt-md-4 mt-sm-4 p-4">
                <div className="row">
                    <div className="col-md-12 col-sm-11">
                        <div className="row">
                            <div className="col-md-5 col-sm-10">
                                <Card className="card shadow-lg h-70">
                                    <CardHeader
                                        className="text-center tex-muted"
                                        title="Shopkeeper"
                                        subheader="Shop"
                                    />
                                    <hr />
                                    <CardMedia
                                        title="ShopKeeper"
                                        image={shop}
                                        className="img-responsive"
                                        alt="Loading"
                                        style={{
                                            padding: '40.25%'
                                        }}
                                    />

                                    <hr />
                                    <CardContent>
                                        <Typography className="h5 text-center">
                                            <span className="lead">{cakeorder.cakes ? <span>Number of Cakes : {cakeorder.cakes}</span> : <span>Out of Stock</span>}</span>
                                        </Typography>
                                    </CardContent>

                                </Card>

                            </div>

                            <div className="col-md-2 col-sm-10">

                            </div>

                            <div className="col-md-5 col-sm-10">
                                <Card className="card shadow-lg">
                                    <CardHeader
                                        className="text-center tex-muted"
                                        title="Customer"
                                        subheader="King"

                                    />
                                    <hr />
                                    <CardMedia
                                        title="Customer"
                                        image={customer}
                                        className="card-img card-img-bottom img-responsive"
                                        alt="Loading"
                                        style={{
                                            padding: '40.25%'
                                        }}
                                    />
                                    <hr />
                                    <CardContent>
                                        <Typography className="h5 text-center">
                                            Cakes Order:<span className="lead">{order}</span>
                                        </Typography>
                                        <center className="mt-3">
                                            <CakeRoundedIcon
                                                color="secondary"
                                                fontSize="large"
                                                onClick={handleSubmit} />
                                        </center>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


import React, { useState } from 'react';
import {
    Typography, Box,
    Grid,
    Button,
    IconButton,
    TextField,
    Divider
} from '@mui/material';
// import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DashboardCard from '@/app/dashboard/components/shared/DashboardCard';
import Products from '../../data/products';

interface ShoppingItem {
  [key: string]: number;
}


const ProductList = () => {
    const parsedProducts = Products.map((product) => {
        return {
            ...product,
            price: parseFloat(product.price),
            quantity: parseInt(product.quantity)
        }
    });
    const [shoppingCart, setShoppingCart] = useState<ShoppingItem>(()=>{
      var cart:ShoppingItem = {};
      Products.map((product) => {
        cart[product.id] = 0;
      });
      return cart;
    });
    return (
        <Box sx={{ height: "100%"}}>
            <DashboardCard title="상품 목록" height='95%'>
                <Box sx={{ overflow: 'auto', width: 'auto', pt: 3 }}>
                    {parsedProducts.map((product) => (
                        <Box sx={{ pb: 3 }} key={product.id}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} lg={3}>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} lg={3}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            {product.price}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            sx={{
                                                fontSize: "13px",
                                                pl: 1
                                            }}
                                        >
                                            ({product.currency})
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} lg={3}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: { xs: "start", lg: "center" },
                                    }}>
                                        <Typography
                                            color="textSecondary"
                                            sx={{
                                                fontSize: "11px",
                                                pr: 2
                                            }}
                                        >
                                            남은 수량:
                                        </Typography>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                        {product.quantity}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            sx={{
                                                fontSize: "13px",
                                                pl: 1
                                            }}
                                        >
                                            ({product.unit})
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} lg={3}>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <IconButton 
                                          color="secondary" 
                                          sx={{ pl: 0, pr: 0}} 
                                          aria-label="remove from shopping cart"
                                          onClick={() => {
                                            if (shoppingCart[product.id] === 0) {
                                              return;
                                            }
                                            setShoppingCart({
                                              ...shoppingCart,
                                              [product.id]: shoppingCart[product.id] - 1
                                            });
                                          }}
                                        >
                                            <IndeterminateCheckBoxIcon />
                                        </IconButton>
                                        <TextField 
                                            id="outlined-basic" 
                                            variant="outlined" 
                                            sx={{ width: "48px" }}
                                            size="small" 
                                            defaultValue={0}
                                            value={shoppingCart[product.id]}
                                            onChange={() => {
                                              if (shoppingCart[product.id] < 0) {
                                                setShoppingCart({
                                                  ...shoppingCart,
                                                  [product.id]: 0
                                                });
                                              }
                                              if (shoppingCart[product.id] > product.quantity) {
                                                setShoppingCart({
                                                  ...shoppingCart,
                                                  [product.id]: product.quantity
                                                });
                                              }
                                            }}
                                        />
                                        <IconButton 
                                          color="primary" 
                                          sx={{ pl: 0, pr: 0}} 
                                          aria-label="add to shopping cart"
                                          onClick={() => {
                                            if (shoppingCart[product.id] === product.quantity) {
                                              return;
                                            }
                                            setShoppingCart({
                                              ...shoppingCart,
                                              [product.id]: shoppingCart[product.id] + 1
                                            });
                                          }}
                                        >
                                            <AddBoxIcon />
                                        </IconButton>
                                        <IconButton color="primary" aria-label="add to shopping cart" sx={{ pr:0 }}>
                                            <AddShoppingCartIcon />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Divider sx={{ color: "darkgray", pt: "3px", pb: "3px" }} />
                        </Box>
                    ))}
                </Box>
            </DashboardCard>
        </Box>
    );
};

export default ProductList;

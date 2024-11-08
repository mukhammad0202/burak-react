import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Margin } from "@mui/icons-material";
import SearchBar from "../../components/searchBar/searchBar";
import { url } from "inspector";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

const products = [
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Stack className={"top-text"}>
              <p>Burak Restaurant</p>
            </Stack>
            <div className={"search"}>
              <SearchBar />
            </div>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"category-product"}>
              <Stack className={"product-category"}>
                <div className={"category-main"}>
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    className={"order"}
                  >
                    Other
                  </Button>
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    className={"order"}
                  >
                    Dessert
                  </Button>
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    className={"order"}
                  >
                    Drink
                  </Button>
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    className={"order"}
                  >
                    Salad
                  </Button>
                  <Button
                    variant={"contained"}
                    color={"primary"}
                    className={"order"}
                  >
                    Dish
                  </Button>
                </div>
              </Stack>
              <Stack className={"product-wrapper"}>
                {products.length !== 0 ? (
                  products.map((product, index) => {
                    return (
                      <Stack key={index} className={"product-card"}>
                        <Stack
                          className={"product-img"}
                          sx={{ backgroundImage: `url(${product.imagePath})` }}
                        >
                          <div className={"product-sale"}>LARGE size</div>
                          <Button className={"shop-btn"}>
                            <img
                              src={"/icons/shopping-cart.svg"}
                              style={{ display: "flex" }}
                            />
                          </Button>
                          <Button className={"view-btn"} sx={{ right: "36px" }}>
                            <Badge badgeContent={23} color="secondary">
                              <RemoveRedEyeIcon
                                sx={{
                                  color: 1 ? "gray" : "white",
                                }}
                              />
                            </Badge>
                          </Button>
                        </Stack>
                        <Box className={"product-desc"}>
                          <span className={"product-title"}>
                            {product.productName}
                          </span>
                          <div className={"product-price"}>
                            <MonetizationOnIcon sx={{ color: "" }} />
                            {12}
                          </div>
                        </Box>
                      </Stack>
                    );
                  })
                ) : (
                  <Box className={"no-data"}>Products are not available</Box>
                )}
              </Stack>
            </Stack>

            <Stack className={"pagination-section"}>
              <Pagination
                count={3}
                page={1}
                renderItem={(item) => (
                  <PaginationItem
                    components={{
                      previous: ArrowBackIcon,
                      next: ArrowForwardIcon,
                    }}
                    {...item}
                    color={"secondary"}
                  />
                )}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-section"}>
        <Box sx={{ marginY: "50px", textAlign: "center" }}>
          <h1>Our Family Brands</h1>
          <Stack
            className="brand-box"
            direction="row"
            spacing={3}
            justifyContent="center"
          >
            <img className="brand-img" src="/img/doner.webp" alt="Brand 1" />
            <img className="brand-img" src="/img/gurme.webp" alt="Brand 2" />
            <img className="brand-img" src="/img/seafood.webp" alt="Brand 3" />
            <img className="brand-img" src="/img/sweets.webp" alt="Brand 3" />
          </Stack>
        </Box>
      </div>

      <div className={"address"}>
        <Container className={"address-container"}>
          <Stack className={"address-area"}>
            <h1 className={"address-title"}>Our address</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26370.114904452876!2d127.67045383875662!3d34.76040343952401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356e0a01d1cc2a71%3A0x6c5f54eb6ccae4cb!2sYeosu%2C%20Jeollanam-do%2C%20South%20Korea!5e0!3m2!1sen!2s!4v1697283014307!5m2!1sen!2s"
              width="1252"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Stack>
        </Container>
      </div>
    </div>
  );
}

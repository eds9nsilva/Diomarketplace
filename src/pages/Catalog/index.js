import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';
import FloatingCart from '../../components/FloatingCart';
import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from './styles';
import api from '../../services/api';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadingProducts() {
      const {data, status} = await api.get('/products');
      console.log(status);
      console.log(data);
      setProducts(data);
    }
    loadingProducts();
  }, []);
  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={{uri: item.image_url}} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton onPress={() => {}}>
                  <ProductButtonText>Adicionar</ProductButtonText>
                  <Feather size={30} name="plus-circle" color="#d1d7e9" />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
}

import React, {useState} from 'react';
import {Mock} from './Mock/Mock';
import {
    Container,
    ProductWrapper,
    ProductImg,
    ProductTitle,
    ProductPrice,
    ProductCount,
    AllCurrent,
    CountButton,
    Count,
    DelateBtn,
    TableRow,
    TableBlock,
    Table,
    TableHeadRow,
    TableChildBlock,
    TableHeadBlock
} from './ShopStyle';
function App() {

    const [data,
        setData] = useState(Mock);

    const PlusBtn = (id) => {
        console.log(id);
        let newData = data.map((item) => {
            return (item.id === id
                ? {
                    ...item,
                    count: item.count + 1,
                    total: (item.count + 1) * item.price
                }
                : item);
        })
        setData(newData)
    };

    const MinusBtn = (id) => {
        let newData = data.map((item) => {
            return (item.id === id && item.count > 1
                ? {
                    ...item,
                    count: item.count - 1,
                    total: (item.count - 1) * item.price
                }
                : item)
        })
        setData(newData)
    }

    const onDelate = (id) => {
        console.log(id);
        let res = data.filter((value) => {
            return (value.id !== id)
        })
        return (setData(res))
    }
    return (
        <Container>

            <Table width='100%'>
                <TableHeadRow>
                    <TableBlock product='true'>Products</TableBlock>
                    <TableHeadBlock>Price</TableHeadBlock>
                    <TableHeadBlock>Quantity</TableHeadBlock>
                    <TableHeadBlock>Total</TableHeadBlock>
                    <TableHeadBlock></TableHeadBlock>
                </TableHeadRow>
                {data.length
                    ? (data.map((item) => {
                        return (
                            <TableRow >
                                <TableChildBlock product='true' key={item.id}>
                                    <ProductWrapper>
                                        <ProductImg src={item.img}/>
                                        <div>
                                            <ProductTitle>{item.title}</ProductTitle>
                                            <p>
                                                <span>SKU:</span>{item.SKU}</p>
                                        </div>
                                    </ProductWrapper>                                </TableChildBlock>
                                <TableChildBlock>
                                    <ProductPrice>$ {item.price}</ProductPrice>
                                </TableChildBlock>
                                <TableChildBlock>
                                    <ProductCount>
                                        <CountButton onClick={() => MinusBtn(item.id)}>-</CountButton>
                                        <Count>
                                            {item.count}
                                        </Count>
                                        <CountButton onClick={() => PlusBtn(item.id)}>+</CountButton>
                                    </ProductCount>
                                </TableChildBlock>
                                <TableChildBlock>
                                    <AllCurrent>
                                        ${+ item.total}
                                    </AllCurrent>
                                </TableChildBlock>
                                <TableChildBlock>
                                    <DelateBtn onClick={() => onDelate(item.id)}/>
                                </TableChildBlock>
                            </TableRow>
                        )
                    }))
                    : (
                        <h2
                            style={{
                            textAlign: 'center'
                        }}>No Data</h2>
                    )}
            </Table>

        </Container>
    );
}

export default App;

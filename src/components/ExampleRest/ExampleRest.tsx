import * as React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
    color: grey;
    padding-left: 20px;
`;

interface Props {
    stocks: Stock;
}

interface Stock {
    symbol: string;
    companyName: string;
}

class ExampleRest extends React.Component<any, any> {
    private cancellable = {
        // it's important that this is one level down, so we can drop the
        // reference to the entire object by setting it to undefined.
        setState: this.setState.bind(this)
    };
    constructor(props: Props) {
        super(props);
        this.state = { stocks: [] };
    }

    public componentDidMount() {
        try {
            fetch('https://api.iextrading.com/1.0/stock/market/list/mostactive')
                .then(res => res.json())
                .then(data => this.cancellable.setState && this.cancellable.setState({ stocks: data }));
        } catch (e) {
            console.log('fetch failed');
        }
    }
    public render() {
        return (
            <ComponentWrapper>
                <h2>Stocks</h2>
                {this.state.stocks &&
                    this.state.stocks.map((stock: Stock) => (
                        <li key={stock.symbol}>{stock.companyName.substring(0, 30)}</li>
                    ))}
            </ComponentWrapper>
        );
    }

    public componentWillUnmount = () => {
        this.cancellable.setState = undefined; // drop all references.
    };
}

export default ExampleRest;

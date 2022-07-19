import {render} from "@testing-library/react";
import Characters from "../Characters";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.REACT_APP_BASEURL_GRAPHQL,
    cache: new InMemoryCache()
  });
const Wrapper = () => {
    return (
        <ApolloProvider client={client}>
            <Characters />
        </ApolloProvider>
    )
}

describe('Character',()=>{
    it('Rendering and testing Characters',async()=>{
       const {findByText} =  render(<Wrapper />);
       expect(await findByText('Rick Sanchez')).toBeInTheDocument();
    });
});
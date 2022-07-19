import {render} from "@testing-library/react";
import Card from "../Card";

describe('Card',()=>{
    it('Rendering and testing Card',async()=>{
       const {findByText} =  render(<Card imgURL='https://rickandmortyapi.com/api/character/avatar/45.jpeg' name='Bill' gender='Male'/>);
       expect(await findByText('Bill')).toBeInTheDocument();
    });
});
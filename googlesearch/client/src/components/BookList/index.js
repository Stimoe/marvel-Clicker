import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button"
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// export function saveBookSubmit(params){

//   console.log("books ",this.state.savedBooks);
//   this.setState({ savedBooks: this.state.params})
//   console.log("books ",this.state.savedBooks);
// }

  
// saveBook = event => {
//   event.preventDefault();
//   this.setState({ savedBooks: this.state.books})
//   console.log("books ",this.state.savedBooks);
  
// }

// saveBook = id => {
//   API.saveBook(id)
//     .then(res => this.loadBooks())
//     .catch(err => console.log(err));
// };


// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  author,
  description,
  link,
  saveBook
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Author {author}</p>
           <p>Summary: {description}</p>
           <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to book!
            </a>
            {/* <p Button onClick={() => this.saveBook(this.state.saveBook)}> Save Book
            </p> */}
          
          </Col>
        </Row>
      </Container>
    </li>
  );
}



// handleFormSubmit = event => {
//   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
//   event.preventDefault();
//   API.getBooks(this.state.bookSearch)
//     .then(res => {

//       this.setState({ books: res.data.items });
//       console.log("state books ",this.state.books)
    
     
      
//     })
//     .catch(err => console.log(err));
// };
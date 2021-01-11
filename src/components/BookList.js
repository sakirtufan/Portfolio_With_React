import React from 'react';
import './BookList.css';
import Book from './Book';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {


  render() {
    return (

      <ThemeContext.Consumer>{(contextTheme) => (
        <BookContext.Consumer>
          {contextBook => {

            const { books } = contextBook;
            const { changeTheme, isDarkTheme, dark, light } = contextTheme;
            const theme = isDarkTheme ? dark : light;

            return (
              <section className="page-section" style={{ background: theme.bg, color: theme.txt }} id="portfolio">
                <div className="container">
                  <div className="text-center">
                    <h2 className="section-heading text-uppercase">My ProjectFolio</h2>
                    <h3 className="section-subheading text-muted">You can see the projects I made</h3>
                    <button type="button" className="btn btn-sm btn-secondary" style={{ marginTop: '-70px' }}
                      onClick={changeTheme}>Change Theme</button>
                  </div>
                  <div className="row">

                    {books.map((book, i) => {
                      return <Book book={book}
                        key={i}
                      />
                    })}

                  </div>
                </div>
              </section>
            )
          }}
        </BookContext.Consumer>
      )}

      </ThemeContext.Consumer>

    )
  }

}

export default BookList;
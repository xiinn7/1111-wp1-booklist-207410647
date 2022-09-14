import './App_47.css';

const data = [{
  img:"https://m.media-amazon.com/images/I/81qYyfUILxL._AC_UY327_FMwebp_QL65_.jpg",
  title:'The Saints of Swallow Hill: A Fascinating Depression Era Historical Novel',
  author:'Donna Everhart',
},

 {
  img:"https://m.media-amazon.com/images/I/71dDj1W87kL._AC_UL480_FMwebp_QL65_.jpg",
  title:'Things We Never Got Over ',
  author:'Lucy Score',
},
 {
  img:"https://m.media-amazon.com/images/I/71NNrCfueGL._AC_UL480_FMwebp_QL65_.jpg",
  title:'Lessons in Chemistry: A Novel',
  author:'Bonnie Garmus',
},

{
  img:"https://m.media-amazon.com/images/I/814ehvesI-L._AC_UY327_FMwebp_QL65_.jpg",
  title:'《Call Me by Your Name: A Novel》',
  author:'André Aciman',
},
 {
  img:"https://m.media-amazon.com/images/I/71kkoH8iHkS._AC_UL480_FMwebp_QL65_.jpg",
  title:'A Hundred Sweet Promises',
  author:'Sepehr Haddad',
},

];


const App_47 = () => {
  return (
    <section className='booklist'>
      { data.map( (book, index) => {
        const {id,img, title, author} = book;
          return <Book_47 key={id} img={img} title={title} author={author}/>
      })

      }
      {/* <Book_47 img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book_47 img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      <Book_47 img={thirdBook.img} title={thirdBook.title} author={thirdBook.author}/> */}
  
    </section>
  );
}

const Book_47 = ({img, title,author}) => {
  //console.log('props',props);
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}


export default App_47;

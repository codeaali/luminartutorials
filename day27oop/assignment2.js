class BookStore{

    getDetails()
    {
        let bookshelf = {
            dsandalgo:{id:1000,name:"bookedbook",copies:100,sold:5},
            pyforkids:{id:1001,name:"nobook",copies:100,sold:20},
            thinkjava:{id:1002,name:"thebook",copies:100,sold:8},
            thegoodjs:{id:1003,name:"justabook",copies:100,sold:15}
        }
        return bookshelf;
    }
    findBook(name){
        let books = this.getDetails();
        if(name in books)
        {
            let copies_no = books[name].copies
            console.log(`yeah ${name} is available and ${copies_no} copies remaing`);
        }else{
            console.log(`oooops! ${name} isn't currently available :(`);
        }
    }

    sortBooks()
    {
        let books = this.getDetails();
        // return Object.entries(books).sort((a,b) => b[1]-a[1])   
       // console.log(Object.entries(books).map(item=>item[1].sold));
        console.log(Object.entries(books).sort((a,b)=>b[1].sold - a[1].sold));
    }

}

var user1 = new BookStore()
user1.findBook("nobook")
user1.sortBooks()

//check for a book
//find its availability/copies
//sort in order of sold
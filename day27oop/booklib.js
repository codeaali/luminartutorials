class BookLibrary{
    books = {
        "alchemist":{book_name:"alchemist",author:"rowling",price:200,no_of_copies:100,sold:10},
        "amzlatan":{}
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
}
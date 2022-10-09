function* fibonacci(){
                    let a=1
                    let b=1
                    while(true){
                        let c=a+b

                        yield c
                        a=b
                        b=c

                    }
                }


// break kısmında sonlandırır ancak continue kısmında o şartı atlat ve devam eder işleme.

const newFunc = () => {
    let arr = ["1","2","3","4","5","1","2","3","4","5"]
    for(let i = 0; i< arr.length; i++){
        if(i === 5){
            continue; // 5'i atlayarak devam eder(0,1,2,3,4,6,7,8,9)
        }
      console.log(i)
    }
}

newFunc()



const newFunc2 = () => {
    let arr = ["1","2","3","4","5","1","2","3","4","5"]
    for(let i = 0; i< arr.length; i++){
        if(i === 5){
            break; // 5'i görene kadar deam eder (0,1,2,3,4)
        }
      console.log(i)
    }
}

newFunc2()
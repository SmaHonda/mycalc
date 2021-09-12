const InputControl2 = () => {
    const [inputValue, setInputValue] = React.useState('')
    const [inputValue2, setInputValue2] = React.useState('')
    const [inputValue3, setInputValue3] = React.useState('')
    const [inputValue4, setInputValue4] = React.useState('')
    var pre = parseInt(inputValue) ;
    var add = parseInt(inputValue2) ;
    var year = parseInt(inputValue3) ;
    var get = ((inputValue4/1+100)/100).toFixed(3) ;
    var rows=[
        {years:1 , originmoney:pre+add, addmoney:pre+add, newmoney:pre+add , moneyadd : ((pre+add)*get).toFixed(0) },
        {years:2 , originmoney:pre+add*2, addmoney:add, newmoney:(pre*get+add*get+add).toFixed(0) , moneyadd : (pre*get**2+add*get**2+add*get).toFixed(0) },
        {years:3 , originmoney:pre+add*3, addmoney:add, newmoney:(pre*get**2+add*get**2+add*get+add).toFixed(0) , moneyadd : (pre*get**3+add*get**3+add*get**2+add*get).toFixed(0) },
        {years:4 , originmoney:pre+add*4, addmoney:add, newmoney:(pre*get**3+add*get**3+add*get**2+add*get+add).toFixed(0) , moneyadd : (pre*get**4+add*get**4+add*get**3+add*get**2+add*get).toFixed(0) },
        {years:5 , originmoney:pre+add*5, addmoney:add, newmoney:(pre*get**4+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(0) , moneyadd : (pre*get**5+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(0) },
        {years:6 , originmoney:pre+add*6, addmoney:add, newmoney:(pre*get**5+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(0) , moneyadd : (pre*get**6+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(0) },
        {years:7 , originmoney:pre+add*7, addmoney:add, newmoney:(pre*get**6+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(0) , moneyadd : (pre*get**7+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(0) },
        {years:8 , originmoney:pre+add*8, addmoney:add, newmoney:(pre*get**7+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(0) , moneyadd : (pre*get**8+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(0) },
        {years:9 , originmoney:pre+add*9, addmoney:add, newmoney:(pre*get**8+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(0) , moneyadd : (pre*get**9+add*get**9+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(0) },
        {years:10 , originmoney:pre+add*10, addmoney:add, newmoney:(pre*get**9+add*get**9+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(0) , moneyadd : (pre*get**10+add*get**10+add*get**9+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(0) },
    ];

    return (
        <div>
            <h1 className="h2">複利計算機</h1>
            <p>請輸入規劃金額</p>
            <div className="d-flex flex-column justify-content-center align-items-center" >
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">本金 $</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='無本金，請輸入0' value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}/>
                    <span className="input-group-text">元</span>
                </div>
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">每年投入 $</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='每年不投入，請輸入0' value={inputValue2}
                    onChange={(event) => setInputValue2(event.target.value)}/>
                    <span className="input-group-text">元</span>
                </div>
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">每年預期獲利</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" value={inputValue4}
                    onChange={(event) => setInputValue4(event.target.value)}/>
                    <span className="input-group-text">%</span>
                </div>
            </div>
            <hr/>
                <p>本金 {pre} 元、每年再投入 {add} 元、預計每年 {inputValue4} ％獲利</p>
                <p>從現在開始存 10 年試算結果</p>
            <table className="table table-striped col-md-8">
                <thead>
                    <tr className="titletr">
                        <td>年</td>
                        <td>本年新投入</td>
                        <td>總投入本金</td>
                        <td>本金+過去複利</td>
                        <td>複利後金額</td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map( item =>
                        <tr className="eachtr">
                            <td>第{item.years}年</td>
                            <td>{item.addmoney}</td>
                            <td>{item.originmoney}</td>
                            <td>{item.newmoney}</td>
                            <td>{item.moneyadd}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(
<InputControl2 />, 
document.getElementById('root')
)

const InputControl878 = () => {
    const [inputValue, setInputValue] = React.useState('')
    const [inputValue2, setInputValue2] = React.useState('')
    const [inputValue3, setInputValue3] = React.useState('')
    const [inputValue4, setInputValue4] = React.useState('')
    var pre = parseInt(inputValue) ;
    var add = parseInt(inputValue2) ;
    var year = parseInt(inputValue3) ;
    var get = ((inputValue4/1+100)/100).toFixed(3) ;
    var rows=[
        {years:1 , originmoney:pre+add, addmoney:pre+add, newmoney:pre+add , moneyadd : ((pre+add)*get).toFixed(3) },
        {years:2 , originmoney:pre+add*2, addmoney:add, newmoney:(pre*get+add*get+add).toFixed(3) , moneyadd : (pre*get**2+add*get**2+add*get).toFixed(3) },
        {years:3 , originmoney:pre+add*3, addmoney:add, newmoney:(pre*get**2+add*get**2+add*get+add).toFixed(3) , moneyadd : (pre*get**3+add*get**3+add*get**2+add*get).toFixed(3) },
        {years:4 , originmoney:pre+add*4, addmoney:add, newmoney:(pre*get**3+add*get**3+add*get**2+add*get+add).toFixed(3) , moneyadd : (pre*get**4+add*get**4+add*get**3+add*get**2+add*get).toFixed(3) },
        {years:5 , originmoney:pre+add*5, addmoney:add, newmoney:(pre*get**4+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(3) , moneyadd : (pre*get**5+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(3) },
        {years:6 , originmoney:pre+add*6, addmoney:add, newmoney:(pre*get**5+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(3) , moneyadd : (pre*get**6+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(3) },
        {years:7 , originmoney:pre+add*7, addmoney:add, newmoney:(pre*get**6+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(3) , moneyadd : (pre*get**7+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(3) },
        {years:8 , originmoney:pre+add*8, addmoney:add, newmoney:(pre*get**7+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(3) , moneyadd : (pre*get**8+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(3) },
        {years:9 , originmoney:pre+add*9, addmoney:add, newmoney:(pre*get**8+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(3) , moneyadd : (pre*get**9+add*get**9+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(3) },
        {years:10 , originmoney:pre+add*10, addmoney:add, newmoney:(pre*get**9+add*get**9+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get+add).toFixed(3) , moneyadd : (pre*get**10+add*get**10+add*get**9+add*get**8+add*get**7+add*get**6+add*get**5+add*get**4+add*get**3+add*get**2+add*get).toFixed(3) },
    ];

    var data878=[
        {year:2020 , q1:0 , q2:0 ,q3:0 ,q4:0.05 },
        {year:2021 , q1:0.15 , q2:0.25 ,q3:0.3 ,q4:0 },
    ]
    return (
        <div>
            <h1 className="h2">00878獲利計算機</h1>
            <p>00878國泰永續高股息過去配息狀況</p>
            <table className="table table-striped col-md-6">
                <thead>
                    <tr>
                        <td>年</td>
                        <td>2月</td>
                        <td>5月</td>
                        <td>8月</td>
                        <td>11月</td>
                    </tr>
                </thead>
                <tbody>
                    { data878.map ( item =>
                        <tr>
                            <td>{item.year}</td>
                            <td>{item.q1}</td>
                            <td>{item.q2}</td>
                            <td>{item.q3}</td>
                            <td>{item.q4}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot >
                    <tr><td colSpan='6'>過去四次配息，以購入成本18元計算，年化報酬約：4.16%<br/>過去四次配息，以購入成本17元計算，年化報酬約：4.41%</td> </tr>
                </tfoot>
            </table>
            <p>請輸入投資規劃</p>
            <div className="d-flex flex-column justify-content-center align-items-center" >
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">現有</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='無，請輸入0' value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}/>
                    <span className="input-group-text">張</span>
                </div>
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">每年存</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='每年不續存，請輸入0' value={inputValue2}
                    onChange={(event) => setInputValue2(event.target.value)}/>
                    <span className="input-group-text">張</span>
                </div>
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">每年預期獲利</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" value={inputValue4}
                    onChange={(event) => setInputValue4(event.target.value)}/>
                    <span className="input-group-text">%</span>
                </div>
            </div>
            <hr/>
                <p>現有 {pre} 張、每年存 {add} 張、預計每年 {inputValue4} ％獲利</p>
                <p>從現在開始存 10 年試算結果</p>
            <table className="table table-striped col-md-8">
                <thead>
                    <tr className="titletr">
                        <td>年</td>
                        <td>新購張數</td>
                        <td>總張數</td>
                        <td>總張數+過往配息購入</td>
                        <td>本年配息再購入後張數</td>
                        <td>本年總配息金額約</td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map( item =>
                        <tr className="eachtr">
                            <td>第{item.years}年</td>
                            <td>{item.addmoney}</td>
                            <td>{item.originmoney}</td>
                            <td>{item.newmoney}</td>
                            <td>{item.moneyadd}</td>
                            <td>{(item.newmoney*180*inputValue4).toFixed(2)}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(
<InputControl878 />, 
document.getElementById('root2')
)
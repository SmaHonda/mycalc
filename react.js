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
        {years:1 , originmoney:pre+add, addmoney:add, newmoney:pre+add , moneyadd : ((pre+add)*get).toFixed(0) },
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
            <h1 className="h2">???????????????</h1>
            <p>?????????????????????</p>
            <div className="d-flex flex-column justify-content-center align-items-center" >
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">?????? $</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='?????????????????????0' value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}/>
                    <span className="input-group-text">???</span>
                </div>
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">???????????? $</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='???????????????????????????0' value={inputValue2}
                    onChange={(event) => setInputValue2(event.target.value)}/>
                    <span className="input-group-text">???</span>
                </div>
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">??????????????????</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" value={inputValue4}
                    onChange={(event) => setInputValue4(event.target.value)}/>
                    <span className="input-group-text">%</span>
                </div>
            </div>
            <hr/>
                <p>?????? {pre} ????????????????????? {add} ?????????????????? {inputValue4} ?????????</p>
                <p>?????????????????? 10 ???????????????</p>
            <table className="table table-striped col-md-8">
                <thead>
                    <tr className="titletr">
                        <td>???</td>
                        <td>???????????????</td>
                        <td>???????????????</td>
                        <td>??????+????????????</td>
                        <td>???????????????</td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map( item =>
                        <tr className="eachtr">
                            <td>???{item.years}???</td>
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
        {years:1 , originmoney:pre+add, addmoney:add, newmoney:pre+add , moneyadd : ((pre+add)*get).toFixed(3) },
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
            <h1 className="h2">00878???????????????</h1>
            <p>00878???????????????????????????????????????</p>
            <table className="table table-striped col-md-6">
                <thead>
                    <tr>
                        <td>???</td>
                        <td>2???</td>
                        <td>5???</td>
                        <td>8???</td>
                        <td>11???</td>
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
                    <tr><td colSpan='6'>????????????????????????????????????18??????????????????????????????4.16%<br/>????????????????????????????????????17??????????????????????????????4.41%</td> </tr>
                </tfoot>
            </table>
            <p>?????????????????????</p>
            <div className="d-flex flex-column justify-content-center align-items-center" >
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">??????</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='???????????????0' value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}/>
                    <span className="input-group-text">???</span>
                </div>
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">?????????</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='???????????????????????????0' value={inputValue2}
                    onChange={(event) => setInputValue2(event.target.value)}/>
                    <span className="input-group-text">???</span>
                </div>
                <div className="input-group mb-3 col-md-6">
                    <span className="input-group-text">??????????????????</span>
                    <input className="form-control" aria-label="Amount (to the nearest dollar)" value={inputValue4}
                    onChange={(event) => setInputValue4(event.target.value)}/>
                    <span className="input-group-text">%</span>
                </div>
            </div>
            <hr/>
                <p>?????? {pre} ??????????????? {add} ?????????????????? {inputValue4} ?????????</p>
                <p>?????????????????? 10 ???????????????</p>
            <table className="table table-striped col-md-8">
                <thead>
                    <tr className="titletr">
                        <td>???</td>
                        <td>????????????</td>
                        <td>?????????</td>
                        <td>?????????+??????????????????</td>
                        <td>??????????????????????????????</td>
                        <td>????????????????????????</td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map( item =>
                        <tr className="eachtr">
                            <td>???{item.years}???</td>
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
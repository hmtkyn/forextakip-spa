import React from 'react'
import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/storage'
import './Views.css'
import GoogleAds from './../Media/Google-Ads.png'

class GauTry extends React.Component {
  constructor () {
    super()
    this.state = {
      sorting: 'bank_gau_rate',
      allData: [],
      isSticky: '',
    }
  }

  handleChange = (event) => this.setState({ sorting: event.target.value })
  handleScroll = () => {

      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200 ? this.setState({
        isSticky: 'isfixed',
      }) :
      this.setState({ isSticky: '' })
  }

  async getData () {
    const db = firebase.firestore()
    await db.collection('fxt_bank').where('bank_gau_rate', '>', '0').onSnapshot(
      (snapshot) => {
        const allBankData = []
        snapshot.forEach((doc) => {
          allBankData.push(doc.data())
        })
        this.setState({
          allData: allBankData,
        })
      },
      (error) => {
        console.error('Error!', error)
      },
    )
  }

  componentDidMount () {
    this.getData()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const bankRate = this.state.allData
      .sort(function (a, b){
        if (parseFloat(a.bank_gau_rate) > parseFloat(b.bank_gau_rate)) {
          return 1
        } else if (parseFloat(a.bank_gau_rate) < parseFloat(b.bank_gau_rate)) {
          return -1
        } else {
          return 0
        }
      })
      .map((val, i) => {
        return (
          <div key={i} className='bank_list__item'>
            <div className='bank_list__rank'>{++i}.</div>
            <div className='bank_list__media'>
              <img
                src={val.bank_img}
                className='bank_list__media--img'
                alt={val.bank_name + ' Logo'}
              />
            </div>
            <div className='bank_list__content'>
              <div className='bank_list__content--top'>
                <div className='bank_list__name'>{val.bank_name}</div>
                <div className='bank_list__exchange'>GAU</div>
              </div>
              <div className='bank_list__content--bottom'>
                <div className='bank_list__buy'>
                  <div className='bank_list__buy--lbl'>Alış</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_gau_buy} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__sell'>
                  <div className='bank_list__buy--lbl'>Satış</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_gau_sell} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__rate'>
                  <div className='bank_list__buy--lbl'>Fark</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_gau_rate} <span>&#8378;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    const bankSell = this.state.allData
      .sort(function (a, b){
        if (parseFloat(a.bank_gau_sell) > parseFloat(b.bank_gau_sell)) {
          return 1
        } else if (parseFloat(a.bank_gau_sell) < parseFloat(b.bank_gau_sell)) {
          return -1
        } else {
          return 0
        }
      })
      .map((val, i) => {
        return (
          <div key={i} className='bank_list__item'>
            <div className='bank_list__rank'>{++i}.</div>
            <div className='bank_list__media'>
              <img
                src={val.bank_img}
                className='bank_list__media--img'
                alt={val.bank_name + ' Logo'}
              />
            </div>
            <div className='bank_list__content'>
              <div className='bank_list__content--top'>
                <div className='bank_list__name'>{val.bank_name}</div>
                <div className='bank_list__exchange'>GAU</div>
              </div>
              <div className='bank_list__content--bottom'>
                <div className='bank_list__buy'>
                  <div className='bank_list__buy--lbl'>Alış</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_gau_buy} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__sell'>
                  <div className='bank_list__buy--lbl'>Satış</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_gau_sell} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__rate'>
                  <div className='bank_list__buy--lbl'>Fark</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_gau_rate} <span>&#8378;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    const bankBuy = this.state.allData
      .sort(function (a, b){
        if (parseFloat(a.bank_gau_buy) > parseFloat(b.bank_gau_buy)) {
          return 1
        } else if (parseFloat(a.bank_gau_buy) < parseFloat(b.bank_gau_buy)) {
          return -1
        } else {
          return 0
        }
      })
      .map((val, i) => {
        return (
          <div key={i} className='bank_list__item'>
            <div className='bank_list__rank'>{++i}.</div>
            <div className='bank_list__media'>
              <img
                src={val.bank_img}
                className='bank_list__media--img'
                alt={val.bank_name + ' Logo'}
              />
            </div>
            <div className='bank_list__content'>
              <div className='bank_list__content--top'>
                <div className='bank_list__name'>{val.bank_name}</div>
                <div className='bank_list__exchange'>GAU</div>
              </div>
              <div className='bank_list__content--bottom'>
                <div className='bank_list__buy'>
                  <div className='bank_list__buy--lbl'>Alış</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_gau_buy} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__sell'>
                  <div className='bank_list__buy--lbl'>Satış</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_gau_sell} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__rate'>
                  <div className='bank_list__buy--lbl'>Fark</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_gau_rate} <span>&#8378;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    return (
      <div className='wrapper'>
        <div className={'wrapper_header ' + this.state.isSticky}>
          <h3>GAU/TRY - Bankalar</h3>
          <select
            name='bank_filter'
            id='bank_filter'
            value={this.state.sorting}
            onChange={this.handleChange}>
            <option value='bank_gau_rate'>Fark - Artan</option>
            <option value='bank_gau_sell'>Satış - Artan</option>
            <option value='bank_gau_buy'>Alış - Artan</option>
          </select>
        </div>
        <div className='wrapper_ads'>
          <img src={GoogleAds} alt='Google Ads' />
        </div>
        <div className='wrapper_content bank_list'>
          {
            this.state.sorting === 'bank_gau_rate' ? bankRate :
            this.state.sorting === 'bank_gau_sell' ? bankSell :
            this.state.sorting === 'bank_gau_buy' ? bankBuy :
            'Tekrar Deneyiniz'}
        </div>
      </div>
    )
  }
}

export default GauTry

import React from 'react'
import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/storage'
import './Views.css'

class EurTry extends React.Component {
  constructor() {
    super()
    this.state = {
      sorting: 'bank_eur_rate',
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

  async getData() {
    const db = firebase.firestore()
    await db
      .collection('fxt_bank')
      .where('bank_eur_rate', '<', '20000')
      .onSnapshot(
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

  componentDidMount() {
    this.getData()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const bankRate = this.state.allData
      .sort(function (a, b) {
        if (parseFloat(a.bank_eur_rate) > parseFloat(b.bank_eur_rate)) {
          return 1
        } else if (parseFloat(a.bank_eur_rate) < parseFloat(b.bank_eur_rate)) {
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
                <div className='bank_list__exchange'>EUR</div>
              </div>
              <div className='bank_list__content--bottom'>
                <div className='bank_list__buy'>
                  <div className='bank_list__buy--lbl'>Al????</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_eur_buy} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__sell'>
                  <div className='bank_list__buy--lbl'>Sat????</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_eur_sell} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__rate'>
                  <div className='bank_list__buy--lbl'>Fark</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_eur_rate} <span>&#8378;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    const bankSell = this.state.allData
      .sort(function (a, b) {
        if (parseFloat(a.bank_eur_sell) > parseFloat(b.bank_eur_sell)) {
          return 1
        } else if (parseFloat(a.bank_eur_sell) < parseFloat(b.bank_eur_sell)) {
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
                <div className='bank_list__exchange'>EUR</div>
              </div>
              <div className='bank_list__content--bottom'>
                <div className='bank_list__buy'>
                  <div className='bank_list__buy--lbl'>Al????</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_eur_buy} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__sell'>
                  <div className='bank_list__buy--lbl'>Sat????</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_eur_sell} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__rate'>
                  <div className='bank_list__buy--lbl'>Fark</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_eur_rate} <span>&#8378;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    const bankBuy = this.state.allData
      .sort(function (a, b) {
        if (parseFloat(a.bank_eur_buy) > parseFloat(b.bank_eur_buy)) {
          return 1
        } else if (parseFloat(a.bank_eur_buy) < parseFloat(b.bank_eur_buy)) {
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
                <div className='bank_list__exchange'>EUR</div>
              </div>
              <div className='bank_list__content--bottom'>
                <div className='bank_list__buy'>
                  <div className='bank_list__buy--lbl'>Al????</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_eur_buy} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__sell'>
                  <div className='bank_list__buy--lbl'>Sat????</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_eur_sell} <span>&#8378;</span>
                  </div>
                </div>
                <div className='bank_list__rate'>
                  <div className='bank_list__buy--lbl'>Fark</div>
                  <div className='bank_list__buy--val'>
                    {val.bank_eur_rate} <span>&#8378;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    return (
      <main className='wrapper'>
        <div className={'wrapper_header ' + this.state.isSticky}>
          <h3>EUR/TRY - Bankalar</h3>
          <select
            name='bank_filter'
            id='bank_filter'
            value={this.state.sorting}
            onChange={this.handleChange}>
            <option value='bank_eur_rate'>Fark - Artan</option>
            <option value='bank_eur_sell'>Sat???? - Artan</option>
            <option value='bank_eur_buy'>Al???? - Artan</option>
          </select>
        </div>
        <div className='wrapper_content bank_list'>
          {
            this.state.sorting === 'bank_eur_rate' ? bankRate :
              this.state.sorting === 'bank_eur_sell' ? bankSell :
                this.state.sorting === 'bank_eur_buy' ? bankBuy :
                  'Tekrar Deneyiniz'}
        </div>
      </main>
    )
  }
}

export default EurTry

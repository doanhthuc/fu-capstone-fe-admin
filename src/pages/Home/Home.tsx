import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableLocal from '../../components/table/TableLocal'
import Widget from '../../components/widget/Widget'
import './Home.scss'
export default function Home() {
  return (
    <div className='home'>
    <Sidebar />
    <div className='home-container'>
      <Navbar />
      <div className='widgets'>
        <Widget type='user' />
        <Widget type='order' />
        <Widget type='earning' />
        <Widget type='balance' />
      </div>
      <div className='charts'>
        <Featured />
        <Chart title='Last 6 Months (Revenue)' aspect={2 / 1} />
      </div>
      <div className='list-container'>
        <div className='list-title'>Latest Transactions</div>
        <TableLocal />
      </div>
    </div>
  </div>
  )
}

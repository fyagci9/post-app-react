import React from 'react'
import {Link} from 'react-router';
import { Badge, Input } from 'antd';
import { BarChartOutlined, CopyOutlined, HomeOutlined, LogoutOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import "./index.css"

const Header = () => {

    const cart = useSelector((state)=> state.cart )

        console.log(cart.cartItems.length);
   
  return (
    <div className='border-b mb-6'>
        <header className='py-4 px-6 flex justify-between items-center gap-10'>
            <div className='logo'>
                <Link to='/'>
                <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                </Link>
            </div>

            <div className='header-search flex-1 flex justify-center '>
                <Input size="large" placeholder="Ne Arıyorsunuz..." prefix={<SearchOutlined />} 
            className='rounded-full max-w-[800px]' /></div>


            <div className='menu-links'>

              <Link to={"/"} className='menu-link'>
                  <HomeOutlined className='md:text-2xl text-xl'/> 
                  <span className='md:text-xs text-[10px]'>Ana Sayfa</span>
              </Link>
              <Badge count={cart.cartItems.length} offset={[0,0]} className='md:flex hidden'>
              <Link to={"/cart"} className='menu-link'>
                 
                  <ShoppingCartOutlined className='md:text-2xl text-xl'/> 
                  <span className='md:text-xs text-[10px]'>Sepete Git</span>
                 
              </Link>
              </Badge>
              <Link to={"/bills"} className='menu-link'>
                  <CopyOutlined className='md:text-2xl text-xl'/> 
                  <span className='md:text-xs text-[10px]'>Faturalar</span>
              </Link>
              <Link to={"/customers"} className='menu-link'>
                  <UserOutlined className='md:text-2xl text-xl'/> 
                  <span className='md:text-xs text-[10px]'>Müşteriler</span>
              </Link>
              <Link to={"/statistic"} className='menu-link'>
                  <BarChartOutlined className='md:text-2xl text-xl'/> 
                  <span className='md:text-xs text-[10px]'>İstatistikler</span>
              </Link>
              <Link to={"/login"} className='menu-link'>
                  <LogoutOutlined className='md:text-2xl text-xl'/> 
                  <span className='md:text-xs text-[10px]'> Çıkış Yap</span>
              </Link>
            </div>
            <Badge count={cart.cartItems.length} offset={[0,0]} className='md:hidden flex'>
              <Link to={"/"} className='menu-link'>
                 
                  <ShoppingCartOutlined className='text-2xl'/> 
                  <span className='md:text-xs text-[10px]'>Sepete Git</span>
                 
              </Link>
              </Badge>
             
        </header>

    </div>
  )
}

export default Header
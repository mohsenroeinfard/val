'use client'

import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import hero from '../../../public/asset/images/couch.png'



const Topbody: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean =
    pathname => router.pathname === pathname

  return (
    <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Dejavoo <br/><span className="d-block"> Special Style Story</span></h1>
								<p className="mb-4"><br></br><br/></p>
								<p dir={'rtl'}>
                  <a href="" className="btn btn-secondary me-2">الان خرید کنید!</a>
                  <a href="#" className="btn btn-white-outline">پیشنهادهای ویژه</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<Image src={hero} className="img-fluid" alt='nan'/>
							</div>
						</div>
					</div>
				</div>	</div>
  );
}

export default Topbody

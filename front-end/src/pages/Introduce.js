import React from 'react';

import { Link } from 'react-router-dom';

import './introduce.css';

const introducePage = () => {
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col-sm-8 col-md-8 col-12'>
        <div className='content-introduce'>
          <div className='header-introduce'>Ăn gì đây</div>
          <div className='body-introduce'>
            <p>Dành cho những người luôn nghĩ phải ăn gì. </p>
            <p>Cách sử dụng:</p>
            <ul>
              <li>Thêm các món ăn bạn yêu thích và có thể nấu được.</li>
              <li>Lấy danh sách ngẫu nhiên các món bạn đã thêm.</li>
              <li>
                Bạn đã có danh sách các món ăn mà không cần phải suy nghĩ gì.
              </li>
            </ul>
            <p>
              Một dự án nhỏ tạo bởi Mai Dương Tài (nguồn tham khảo :
              angiday.j2team.dev)
            </p>
            <Link to='/foods' className='btn btn-primary'>
              Bắt đầu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default introducePage;

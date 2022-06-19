import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, Row, Col, Input, Select} from 'antd';

import { useGetNewsQuery } from '../services/newsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useState } from 'react';

const {Text, Title} = Typography;


const News = ({simplified}) => {
  const {data, isFetching} = useGetNewsQuery();
  if (isFetching) return 'loading';
  console.log(data[0]);
  return(
    // <ol>
    //   {data.map(news => (
    //     <li key={news}>{news.title}</li>
    //   ))}
    // </ol>
    
    <Row gutter={[24,24]}>
      {data.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className = "news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className = "news-image-container">
              <Title className = "news-title" level={4}>{news.title}</Title>
              </div>
              
              </a>
          </Card>
        </Col>
      
      ))}
      
    </Row>
  
  )
};

export default News;

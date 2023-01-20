import React from 'react';
import './DetailPage.css';

import { useParams } from 'react-router-dom';

export default function DetailPage() {
  //import id as prop from Main via services fetch
  let { id } = useParams();

  return <div>{id}</div>;
}

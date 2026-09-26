import React from 'react'
import PackagePage from "./PackagePage";
import {nekklachtenPackage} from "./PackagesData";

const NekklachtenPage = (props) => <PackagePage style={props.style} data={nekklachtenPackage} />

export default NekklachtenPage;

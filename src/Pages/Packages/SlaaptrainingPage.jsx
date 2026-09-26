import React from 'react'
import PackagePage from "./PackagePage";
import {slaaptrainingPackage} from "./PackagesData";

const SlaaptrainingPage = (props) => <PackagePage style={props.style} data={slaaptrainingPackage} />

export default SlaaptrainingPage;

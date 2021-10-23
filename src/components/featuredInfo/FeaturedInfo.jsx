import React from "react"
import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoney">
            -11,4 <ArrowDownward />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoney">
            -1,4 <ArrowDownward />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoney">
            -2,4 <ArrowUpward />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      {/* 40p51s */}
    </div>
  )
}

export default FeaturedInfo

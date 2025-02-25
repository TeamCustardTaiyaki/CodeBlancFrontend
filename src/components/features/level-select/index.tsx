import { useNavigate } from 'react-router-dom';
import { Button } from "../../common/Button";
import { DivWrapper } from "../../common/DivWrapper";
import { PricingCardWrapper } from "../../common/PricingCardWrapper";
import ellipse1 from "../../../assets/images/Ellipse 1.png";
import physics from "../../../assets/images/physics.png";
import "./LevelSelect.scss";

/**
 * 難易度レベル選択画面のコンポーネント
 * 初級・中級・上級の3つのレベルカードを表示
 */
export const LevelSelect = () => {
  const navigate = useNavigate();

  /**
   * 「始める」ボタンクリック時のハンドラー
   * 学習開始画面に遷移
   */
  const handleClick = () => {
    navigate('/start');
  };

  return (
    <div className="level-select">
      <div className="group">
        {/* 初級 */}
        <div className="div-wrapper-3">
          <div className="overlap-group">
            <PricingCardWrapper
              className="pricing-card-instance"
              pricingCardDeviceDesktopClassName="pricing-card-2"
            />
            <img className="ellipse" alt="Ellipse" src={ellipse1} />
            {/* <DivWrapper className="component-178" text="初級" /> */}
            <DivWrapper className="component-178" text="Beta" />
            <div className="text-wrapper-3">
              This is beta test version <br />
              Please enjoy it
            </div>
            <img className="physics" alt="physics" src={physics} />
            <Button
              className="button-5"
              labelText="始める"
              labelTextClassName="button-3"
              showIcon={false}
              style="filled"
              onClick={handleClick}
            />
          </div>
        </div>

        {/* 中級 */}
        <div className="overlap-wrapper disabled">
          <div className="overlap-group">
            <PricingCardWrapper
              className="pricing-card-instance"
              pricingCardDeviceDesktopClassName="pricing-card-2"
            />
            <img className="ellipse" alt="Ellipse" src={ellipse1} />
            <DivWrapper className="component-178" text="中級" />
            <div className="text-wrapper-3">
              Coming Soon
            </div>
            <Button
              className="button-4"
              labelText="準備中"
              labelTextClassName="button-3"
              showIcon={false}
              style="outlined"
              onClick={() => {}}
              disabled={true}
            />
          </div>
        </div>

        {/* 上級 */}
        <div className="view disabled">
          <div className="div-wrapper-2">
            <div className="frame">
              <div className="overlap-group">
                <PricingCardWrapper
                  className="pricing-card-instance"
                  pricingCardDeviceDesktopClassName="pricing-card-2"
                />
                <img className="ellipse" alt="Ellipse" src={ellipse1} />
                <DivWrapper className="component-178" text="上級" />
                <div className="text-wrapper-3">
                  Coming Soon
                </div>
                <Button
                  className="button-instance"
                  labelText="準備中"
                  labelTextClassName="button-3"
                  showIcon={false}
                  style="outlined"
                  onClick={() => {}}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelSelect;

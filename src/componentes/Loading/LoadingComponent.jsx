import styl from "./Loading.module.css"

export default function LoadingComponent() {
  return (
    <div className={styl.body}>
      <div className={styl.L}>L</div>
          <div className={styl.outter}>
              <div className={styl.mid}></div>
      </div>
          <div className={styl.ADING}>ADING</div>
    </div>
  );
}

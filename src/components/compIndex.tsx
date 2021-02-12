import Button from "./button/button";
import ButtonInfo from "./info/info";
import buttonVariant from "./variant";

const ButtonComponents = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-10 sm:space-y-0 gap-y-10 sm:grid sm:grid-cols-2">
        <div className="space-y-4">
          <ButtonInfo info="<Button />" />
          <Button buttonStyle={buttonVariant.DefaultState} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="&:hover, &:focus" />
          <Button buttonStyle={buttonVariant.DefaultInvokedState} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="<Button variant=”outline” />" />
          <Button buttonStyle={buttonVariant.OutlineState} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="&:hover, &:focus" />
          <Button buttonStyle={buttonVariant.OutlineInvokedState} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="<Button variant=”text” />" />
          <Button buttonStyle={buttonVariant.TextState} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="&:hover, &:focus" />
          <Button buttonStyle={buttonVariant.TextInvokedState} />
        </div>
      </div>
      <div className="space-y-4">
        <ButtonInfo info="<Button disableShadow />" />
        <Button buttonStyle={buttonVariant.DisabledShadow} />
      </div>
      <div className="space-y-10 sm:space-y-0 gap-y-10 sm:grid sm:grid-cols-2">
        <div className="space-y-4">
          <ButtonInfo info="<Button disabled />" />
          <Button buttonStyle={buttonVariant.Disabled} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="<Button variant=”text” disabled />" />
          <Button buttonStyle={buttonVariant.TextDisabled} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="<Button startIcon=”local_grocery_store” />" />
          <Button buttonStyle={buttonVariant.ButtonIcon} buttonIcon={"left"} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="<Button endIcon=”local_grocery_store” />" />
          <Button buttonStyle={buttonVariant.ButtonIcon} buttonIcon={"right"} />
        </div>
      </div>
      <div className="space-y-10 sm:space-y-0 gap-y-10 sm:grid sm:grid-cols-3">
        <div className="space-y-4">
          <ButtonInfo info="<Button size=”sm” />" />
          <Button buttonStyle={buttonVariant.SmallButton} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="<Button size=”md” />" />
          <Button buttonStyle={buttonVariant.ButtonIcon} />
        </div>
        <div className="space-y-4">
          <ButtonInfo info="<Button size=”lg” />" />
          <Button buttonStyle={buttonVariant.LargeButton} />
        </div>
      </div>
      <div className="space-y-10 sm:space-y-0 gap-y-10 sm:grid sm:grid-cols-4">
        <div className="space-y-6">
          <div className="space-y-4">
            <ButtonInfo info="<Button color=”default” />" />
            <Button buttonStyle={buttonVariant.DefaultState} />
          </div>
          <div className="space-y-4">
            <ButtonInfo info="&:hover, &:focus" />
            <Button buttonStyle={buttonVariant.DefaultInvokedState} />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <ButtonInfo info="<Button color=”primary” />" />
            <Button buttonLabel="Primary" buttonStyle={buttonVariant.ButtonIcon} />
          </div>
          <div className="space-y-4">
            <ButtonInfo info="&:hover, &:focus" />
            <Button buttonLabel="Primary" buttonStyle={buttonVariant.ButtonIconInvoked} />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <ButtonInfo info="<Button color=”secondary” />" />
            <Button buttonLabel="Secondary" buttonStyle={buttonVariant.SecondaryButton} />
          </div>
          <div className="space-y-4">
            <ButtonInfo info="&:hover, &:focus" />
            <Button buttonLabel="Secondary" buttonStyle={buttonVariant.SecondaryButtonInvoked} />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <ButtonInfo info="<Button color=”danger” />" />
            <Button buttonLabel="Danger" buttonStyle={buttonVariant.DangerButton} />
          </div>
          <div className="space-y-4">
            <ButtonInfo info="&:hover, &:focus" />
            <Button buttonLabel="Danger" buttonStyle={buttonVariant.DangerButtonInvoked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponents;

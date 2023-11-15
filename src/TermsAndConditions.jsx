const TermsAndConditions = () => {
  return (
    <div className="border-double border-4 border-sky-500">
      <form>
        <p>
          You are accepting our <span>Terms and Conditions</span> by starting
          these classes which are designed to help you quickly become proficient
          in rescues and recoveries with C-HERO equipment. You assume
          responsibility for your actions with the use of C-HERO equipment.
          <br />
          This eTraining material is copyrighted and not for distribution,
          unless expressly approved by C-HERO in writing.
        </p>
        <input type="checkbox" />
        <label>Accepted</label>
        <div>
          <button type="submit">Start Training</button>
        </div>
      </form>
    </div>
  );
};

export default TermsAndConditions;

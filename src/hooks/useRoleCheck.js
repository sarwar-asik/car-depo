import { useEffect, useState } from "react";

const useRoleCheck = (email) => {
  const [roleCheck, setRoleCheck] = useState("");

  const [adminloading , setAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3008/usersTypes/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setRoleCheck(data.userType);
        // console.log(data);
          setAdminLoading(false)
      });
  }, [email]);
  return [roleCheck, adminloading];
};
export default useRoleCheck;

import { useEffect, useState } from "react";

const useRoleCheck = (email) => {
  const [roleCheck, setRoleCheck] = useState("");

// console.log(email);  

  const [adminloading, setAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`https://sh-server-site.vercel.app/usersTypes/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setRoleCheck(data.userType);
        // console.log(data);
        setAdminLoading(false);
      });
  }, [email]);
  return [roleCheck, adminloading];
};
export default useRoleCheck;

import { DepartmentsData, Users } from "../types/user";

export default function convertToDepartmentData(users: Users): DepartmentsData {
  const result = {} as DepartmentsData;

  users.forEach((user) => {
    const { firstName, lastName, gender, age, hair, address } = user;

    const department = user.company.department;

    if (!result[department]) {
      result[department] = {
        male: 0,
        female: 0,
        ageRange: `${age}-${age}`,
        hair: {},
        addressUser: {},
      };
    }

    // Count gender
    if (gender === "male") result[department].male += 1;
    if (gender === "female") result[department].female += 1;

    // ageRange
    const [minAge, maxAge] = result[department].ageRange.split("-");
    if (age < Number(minAge)) result[department].ageRange = `${age}-${maxAge}`;
    if (age > Number(maxAge)) result[department].ageRange = `${minAge}-${age}`;

    // hair
    result[department].hair[hair.color] =
      (result[department].hair[hair.color] || 0) + 1;

    // address
    result[department].addressUser[firstName + lastName] = address.postalCode;
  });

  return result;
}

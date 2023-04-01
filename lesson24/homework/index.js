const studentsBirthDays = (students) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const studentsByMonth = {};

  for (let i = 0; i < months.length; i++) {
    studentsByMonth[months[i]] = [];
  }

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const birthDate = new Date(student.birthDate);
    const monthName = months[birthDate.getMonth()];
    studentsByMonth[monthName].push(student);
  }

  for (let monthName in studentsByMonth) {
    studentsByMonth[monthName].sort((a, b) => {
      const aDay = new Date(a.birthDate).getDate();
      const bDay = new Date(b.birthDate).getDate();
      return aDay - bDay;
    });
  }

  return studentsByMonth;
};

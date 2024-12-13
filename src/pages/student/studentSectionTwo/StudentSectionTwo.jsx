import React from "react";

const StudentSectionTwo = () => {
  return (
    <div>
       <h1 class="text-3xl font-bold text-center mb-6">Class Timetable</h1>
    <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border border-gray-300 px-4 py-2">Day</th>
                    <th class="border border-gray-300 px-4 py-2">9:30 - 10:30</th>
                    <th class="border border-gray-300 px-4 py-2">10:30 - 11:15</th>
                    <th class="border border-gray-300 px-4 py-2">11:15 - 11:30</th>
                    <th class="border border-gray-300 px-4 py-2">11:30 - 12:30</th>
                    <th class="border border-gray-300 px-4 py-2">12:30 - 1:30</th>
                    <th class="border border-gray-300 px-4 py-2">1:30 - 2:30</th>
                    <th class="border border-gray-300 px-4 py-2">2:30 - 3:30</th>
                </tr>
            </thead>
            <tbody>
                <tr class="even:bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">Monday</td>
                    <td class="border border-gray-300 px-4 py-2">Eng</td>
                    <td class="border border-gray-300 px-4 py-2">Maths</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Social</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Moral</td>
                    <td class="border border-gray-300 px-4 py-2">Hindi</td>
                </tr>
                <tr class="even:bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">Tuesday</td>
                    <td class="border border-gray-300 px-4 py-2">Eng</td>
                    <td class="border border-gray-300 px-4 py-2">Science</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Hindi</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Science</td>
                    <td class="border border-gray-300 px-4 py-2">Maths</td>
                </tr>
                <tr class="even:bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">Wednesday</td>
                    <td class="border border-gray-300 px-4 py-2">Eng</td>
                    <td class="border border-gray-300 px-4 py-2">Hindi</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Moral</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Maths</td>
                    <td class="border border-gray-300 px-4 py-2">Social</td>
                </tr>
                <tr class="even:bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">Thursday</td>
                    <td class="border border-gray-300 px-4 py-2">Eng</td>
                    <td class="border border-gray-300 px-4 py-2">Moral</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Science</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Social</td>
                    <td class="border border-gray-300 px-4 py-2">Maths</td>
                </tr>
                <tr class="even:bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">Friday</td>
                    <td class="border border-gray-300 px-4 py-2">Eng</td>
                    <td class="border border-gray-300 px-4 py-2">Social</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Maths</td>
                    <td class="border border-gray-300 px-4 py-2">Break</td>
                    <td class="border border-gray-300 px-4 py-2">Science</td>
                    <td class="border border-gray-300 px-4 py-2">Hindi</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  );
};

export default StudentSectionTwo;

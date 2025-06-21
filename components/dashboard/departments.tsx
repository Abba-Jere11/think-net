"use client"

import * as React from "react"
import { Building2, Users, Mail, Phone, MapPin, Calendar, Search, Plus, Edit, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

// Sample departments data
const departmentsData = [
  {
    id: 1,
    name: "Human Resources",
    description: "Managing employee relations, recruitment, and organizational development",
    manager: "Sarah Johnson",
    staffCount: 8,
    location: "Floor 2, Building A",
    established: "2020-01-15",
    staff: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "HR Manager",
        email: "sarah.j@thinklab.com",
        phone: "+1-555-0101",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "HR Specialist",
        email: "michael.c@thinklab.com",
        phone: "+1-555-0102",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 3,
        name: "Emily Davis",
        role: "Recruiter",
        email: "emily.d@thinklab.com",
        phone: "+1-555-0103",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 4,
        name: "James Wilson",
        role: "Training Coordinator",
        email: "james.w@thinklab.com",
        phone: "+1-555-0104",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 5,
        name: "Lisa Anderson",
        role: "HR Assistant",
        email: "lisa.a@thinklab.com",
        phone: "+1-555-0105",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 6,
        name: "David Brown",
        role: "Benefits Administrator",
        email: "david.b@thinklab.com",
        phone: "+1-555-0106",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 7,
        name: "Jennifer Lee",
        role: "Employee Relations",
        email: "jennifer.l@thinklab.com",
        phone: "+1-555-0107",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 8,
        name: "Robert Taylor",
        role: "Payroll Specialist",
        email: "robert.t@thinklab.com",
        phone: "+1-555-0108",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
  {
    id: 2,
    name: "Information Technology",
    description: "Managing technology infrastructure, software development, and digital solutions",
    manager: "Alex Rodriguez",
    staffCount: 12,
    location: "Floor 3, Building B",
    established: "2019-03-10",
    staff: [
      {
        id: 9,
        name: "umar Rodriguez",
        role: "IT Director",
        email: "alex.r@thinklab.com",
        phone: "+1-555-0201",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 10,
        name: "Maria Garcia",
        role: "Senior Developer",
        email: "maria.g@thinklab.com",
        phone: "+1-555-0202",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 11,
        name: "Kevin Park",
        role: "System Administrator",
        email: "kevin.p@thinklab.com",
        phone: "+1-555-0203",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 12,
        name: "Amanda White",
        role: "UI/UX Designer",
        email: "amanda.w@thinklab.com",
        phone: "+1-555-0204",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 13,
        name: "Thomas Kim",
        role: "DevOps Engineer",
        email: "thomas.k@thinklab.com",
        phone: "+1-555-0205",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 14,
        name: "Rachel Green",
        role: "QA Tester",
        email: "rachel.g@thinklab.com",
        phone: "+1-555-0206",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 15,
        name: "Daniel Martinez",
        role: "Frontend Developer",
        email: "daniel.m@thinklab.com",
        phone: "+1-555-0207",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 16,
        name: "Sophie Turner",
        role: "Backend Developer",
        email: "sophie.t@thinklab.com",
        phone: "+1-555-0208",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 17,
        name: "Chris Evans",
        role: "Database Administrator",
        email: "chris.e@thinklab.com",
        phone: "+1-555-0209",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 18,
        name: "Natalie Stone",
        role: "IT Support",
        email: "natalie.s@thinklab.com",
        phone: "+1-555-0210",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 19,
        name: "Mark Johnson",
        role: "Security Analyst",
        email: "mark.j@thinklab.com",
        phone: "+1-555-0211",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 20,
        name: "Laura Wilson",
        role: "Technical Writer",
        email: "laura.w@thinklab.com",
        phone: "+1-555-0212",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
  {
    id: 3,
    name: "Finance & Accounting",
    description: "Financial planning, budgeting, accounting, and financial reporting",
    manager: "Patricia Moore",
    staffCount: 6,
    location: "Floor 1, Building A",
    established: "2020-02-01",
    staff: [
      {
        id: 21,
        name: "Patricia Moore",
        role: "Finance Director",
        email: "patricia.m@thinklab.com",
        phone: "+1-555-0301",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 22,
        name: "John Smith",
        role: "Senior Accountant",
        email: "john.s@thinklab.com",
        phone: "+1-555-0302",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 23,
        name: "Anna Thompson",
        role: "Financial Analyst",
        email: "anna.t@thinklab.com",
        phone: "+1-555-0303",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 24,
        name: "Carlos Mendez",
        role: "Accounts Payable",
        email: "carlos.m@thinklab.com",
        phone: "+1-555-0304",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 25,
        name: "Helen Chang",
        role: "Accounts Receivable",
        email: "helen.c@thinklab.com",
        phone: "+1-555-0305",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 26,
        name: "Ryan O'Connor",
        role: "Budget Analyst",
        email: "ryan.o@thinklab.com",
        phone: "+1-555-0306",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
  {
    id: 4,
    name: "Marketing & Sales",
    description: "Brand management, digital marketing, sales operations, and customer relations",
    manager: "Jessica Adams",
    staffCount: 10,
    location: "Floor 2, Building B",
    established: "2019-11-20",
    staff: [
      {
        id: 27,
        name: "Jessica Adams",
        role: "Marketing Director",
        email: "jessica.a@thinklab.com",
        phone: "+1-555-0401",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 28,
        name: "Brian Foster",
        role: "Sales Manager",
        email: "brian.f@thinklab.com",
        phone: "+1-555-0402",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 29,
        name: "Samantha Reed",
        role: "Digital Marketing Specialist",
        email: "samantha.r@thinklab.com",
        phone: "+1-555-0403",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 30,
        name: "Tyler Brooks",
        role: "Content Creator",
        email: "tyler.b@thinklab.com",
        phone: "+1-555-0404",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 31,
        name: "Michelle Clark",
        role: "Brand Manager",
        email: "michelle.c@thinklab.com",
        phone: "+1-555-0405",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 32,
        name: "Andrew Scott",
        role: "Sales Representative",
        email: "andrew.s@thinklab.com",
        phone: "+1-555-0406",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 33,
        name: "Victoria Hall",
        role: "Social Media Manager",
        email: "victoria.h@thinklab.com",
        phone: "+1-555-0407",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 34,
        name: "Nathan Price",
        role: "SEO Specialist",
        email: "nathan.p@thinklab.com",
        phone: "+1-555-0408",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 35,
        name: "Olivia Cooper",
        role: "Customer Success Manager",
        email: "olivia.c@thinklab.com",
        phone: "+1-555-0409",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 36,
        name: "Ethan Murphy",
        role: "Business Development",
        email: "ethan.m@thinklab.com",
        phone: "+1-555-0410",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
  {
    id: 5,
    name: "Operations",
    description: "Daily operations management, process optimization, and quality assurance",
    manager: "William Turner",
    staffCount: 7,
    location: "Floor 1, Building B",
    established: "2020-05-15",
    staff: [
      {
        id: 37,
        name: "William Turner",
        role: "Operations Manager",
        email: "william.t@thinklab.com",
        phone: "+1-555-0501",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 38,
        name: "Grace Phillips",
        role: "Process Analyst",
        email: "grace.p@thinklab.com",
        phone: "+1-555-0502",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 39,
        name: "Jacob Miller",
        role: "Quality Assurance",
        email: "jacob.m@thinklab.com",
        phone: "+1-555-0503",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 40,
        name: "Isabella Davis",
        role: "Operations Coordinator",
        email: "isabella.d@thinklab.com",
        phone: "+1-555-0504",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 41,
        name: "Lucas Anderson",
        role: "Logistics Specialist",
        email: "lucas.a@thinklab.com",
        phone: "+1-555-0505",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 42,
        name: "Mia Rodriguez",
        role: "Compliance Officer",
        email: "mia.r@thinklab.com",
        phone: "+1-555-0506",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 43,
        name: "Noah Wilson",
        role: "Operations Assistant",
        email: "noah.w@thinklab.com",
        phone: "+1-555-0507",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
]

export default function DepartmentsPage() {
  const [selectedDepartment, setSelectedDepartment] = React.useState(departmentsData[0])
  const [searchTerm, setSearchTerm] = React.useState("")
  const [showDepartmentsList, setShowDepartmentsList] = React.useState(false)

  const filteredDepartments = departmentsData.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 md:px-6 bg-white">
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setShowDepartmentsList(!showDepartmentsList)}
        >
          <Building2 className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-gray-600 hidden md:block" />
          <h1 className="text-lg font-semibold">Departments</h1>
        </div>
        <div className="ml-auto">
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            <Plus className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Add Department</span>
            <span className="sm:hidden">Add</span>
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Departments List */}
        <div
         className={`w-full md:w-72 border-r bg-white flex flex-col flex-shrink-0 ${
    showDepartmentsList ? "block" : "hidden"
  } md:block h-full overflow-y-auto`}
        >
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredDepartments.map((department) => (
              <Card
                key={department.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedDepartment.id === department.id
                    ? "ring-2 ring-red-500 bg-red-50 border-red-200"
                    : "hover:bg-gray-50 border-gray-200"
                }`}
                onClick={() => {
  setSelectedDepartment(department)
  setShowDepartmentsList(false) // Hide departments list on mobile after selection
}}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1 text-gray-900">{department.name}</h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                        {department.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{department.staffCount} staff</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{department.location.split(",")[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Panel - Department Details */}
        <div className="flex-1 overflow-y-auto bg-white">
          {selectedDepartment && (
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Department Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{selectedDepartment.name}</h2>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {selectedDepartment.description}
                  </p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Total Staff</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">{selectedDepartment.staffCount}</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-900">Manager</span>
                      </div>
                      <p className="text-sm font-semibold text-green-600">{selectedDepartment.manager}</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-900">Location</span>
                      </div>
                      <p className="text-sm font-semibold text-purple-600">{selectedDepartment.location}</p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-900">Established</span>
                      </div>
                      <p className="text-sm font-semibold text-orange-600">
                        {new Date(selectedDepartment.established).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Staff List */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Department Staff</h3>
                  <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Staff
                  </Button>
                </div>

                <div className="grid gap-3 md:gap-4">
                  {selectedDepartment.staff.map((staff) => (
                    <Card key={staff.id} className="hover:shadow-md transition-shadow border-gray-200">
                      <CardContent className="p-3 md:p-4">
                        <div className="flex items-center gap-3 md:gap-4">
                          <Avatar className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                            <AvatarImage src={staff.avatar || "/placeholder.svg"} alt={staff.name} />
                            <AvatarFallback className="bg-gray-100 text-gray-600 text-xs md:text-sm">
                              {staff.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900 text-sm md:text-base truncate">
                                {staff.name}
                              </h4>
                              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700 w-fit">
                                {staff.role}
                              </Badge>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs md:text-sm text-gray-600">
                              <div className="flex items-center gap-1 truncate">
                                <Mail className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{staff.email}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="w-3 h-3 flex-shrink-0" />
                                <span>{staff.phone}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-1 md:gap-2 flex-shrink-0">
                            <Button variant="ghost" size="sm" className="hover:bg-gray-100 h-8 w-8 p-0">
                              <Edit className="w-3 h-3 md:w-4 md:h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                            >
                              <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import { Users, UserPlus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Staff Admission Portal</h1>
        <p className="text-gray-600">Choose your preferred method to add new staff members</p>
      </div>

      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 h-14">
          <TabsTrigger
            value="single"
            className="flex items-center gap-3 text-base font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/20"
          >
            <UserPlus className="h-5 w-5" />
            Single Staff Admission
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="flex items-center gap-3 text-base font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/20"
          >
            <Users className="h-5 w-5" />
            Bulk Staff Admission
          </TabsTrigger>
        </TabsList>

        <TabsContent value="single" className="space-y-6">
          <Card className="border-primary/20 shadow-sm">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-t-lg">
             
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Personal Details</h3>
                  <p className="text-sm text-gray-600">Enter basic information and contact details</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Role Assignment</h3>
                  <p className="text-sm text-gray-600">Set permissions and department allocation</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Account Setup</h3>
                  <p className="text-sm text-gray-600">Generate credentials and send welcome email</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bulk" className="space-y-6">
          <Card className="border-primary-200 shadow-sm">
            <CardHeader className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-primary-800">
                <Users className="h-6 w-6" />
                Bulk Staff Import
              </CardTitle>
              <CardDescription className="text-primary-600">
                Upload multiple staff members simultaneously using CSV or Excel files
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">1</span>
                  </div>
                  <h3 className="font-medium text-gray-900">File Upload</h3>
                  <p className="text-sm text-gray-600">Upload CSV or Excel file with staff data</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">2</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Data Validation</h3>
                  <p className="text-sm text-gray-600">Review and validate imported information</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">3</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Batch Processing</h3>
                  <p className="text-sm text-gray-600">Create accounts and send notifications</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">Bulk Import Benefits</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Process hundreds of staff members in minutes</li>
                      <li>• Automatic duplicate detection and handling</li>
                      <li>• Batch email notifications and welcome messages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

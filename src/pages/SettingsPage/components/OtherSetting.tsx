import { SimpleIconsGithub } from '@/components/icons/simpleIcons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ExternalLinkIcon, FileTextIcon } from 'lucide-react'
import { BugIcon } from 'lucide-react'
import { IPC_CHANNELS } from 'shared/ipcChannels'

export function OtherSetting() {
  const handleOpenLogFolder = async () => {
    await window.ipcRenderer.invoke(IPC_CHANNELS.app.openLogFolder)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>其他设置</CardTitle>
        <CardDescription>更多功能与信息</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">运行日志</h4>
              <p className="text-sm text-muted-foreground">
                查看程序运行日志文件 main.log
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={handleOpenLogFolder}
            >
              <FileTextIcon className="h-4 w-4" />
              打开日志文件夹
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

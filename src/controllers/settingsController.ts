import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { SettingsRepositories } from "../repositories/SettingsRepositories"

class SettingsController {
    async create(req: Request, res: Response) {

        const { chat, username } = req.body

        const settingsRepository = getCustomRepository(SettingsRepositories)

        const settings = settingsRepository.create({
            chat,
            username
        })

        await settingsRepository.save(settings)

        return res.json(settings)
    }
}

export { SettingsController }